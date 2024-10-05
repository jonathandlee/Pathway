'use client'

import { useEffect, useRef, useState } from 'react'
import { useLoadScript } from '@react-google-maps/api'
import { Search, X, Accessibility, Ear, Eye, Info, Filter } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react';
import Modal from './modal'
import { stringify } from 'querystring'


// Define types for accessibility features
interface AccessibilityFeatures {
  wheelchair: boolean
  hearingLoop: boolean
  brailleSignage: boolean
  guideDog: boolean
  parking: boolean
}

interface Venue {
  id: string
  name: string
  position: google.maps.LatLngLiteral
  address: string
  features: AccessibilityFeatures
  rating: number
  totalRatings: number
  phoneNumber?: string
}

const libraries: ("places")[] = ["places"]

// Sample venues data (in real app, this would come from an API)
const sampleVenues: Venue[] = [
  {
    id: '1',
    name: 'Accessible Cafe',
    position: { lat: 42.44233661513344, lng: -76.48545504165095 },
    address: 'Collegetown Bagels',
    features: {
      wheelchair: true,
      hearingLoop: true,
      brailleSignage: true,
      guideDog: true,
      parking: true
    },
    rating: 4.5,
    totalRatings: 128,
    phoneNumber: '+XX XXX XXX XXXX'
  },
  // Add more sample venues as needed
]

export default function MapPage() {
  const mapRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null)
  const [showLegend, setShowLegend] = useState(false)
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)

  const [formData, setFormData] = useState({ name: '', description: '' });
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const [filters, setFilters] = useState<AccessibilityFeatures>({
    wheelchair: false,
    hearingLoop: false,
    brailleSignage: false,
    guideDog: false,
    parking: false
  })

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries,
  })

  const createMarkerIcon = (features: AccessibilityFeatures) => {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: features.wheelchair ? '#4CAF50' : '#FFA000',
      fillOpacity: 1,
      strokeWeight: 1,
      strokeColor: '#FFFFFF',
      scale: 10,
    }
  }

  const filterVenues = (venues: Venue[]) => {
    return venues.filter(venue => {
      if (Object.values(filters).every(f => f === false)) return true
      return Object.entries(filters).some(([key, value]) => {
        if (!value) return false
        return venue.features[key as keyof AccessibilityFeatures]
      })
    })
  }

  const updateMarkers = () => {
    console.log("hello hello helo");
    if (!mapRef.current) return

    markersRef.current.forEach(marker => marker.setMap(null))
    markersRef.current = []

    const filteredVenues = filterVenues(sampleVenues)
    filteredVenues.forEach(venue => {
      const marker = new google.maps.Marker({
        position: venue.position,
        map: mapRef.current,
        icon: createMarkerIcon(venue.features),
        title: venue.name,
      })

      marker.addListener('click', () => {
        setSelectedVenue(venue)

        console.log("hello 2 ");
        if (infoWindowRef.current) {
          infoWindowRef.current.close()
        }
        infoWindowRef.current = new google.maps.InfoWindow({
          content: createInfoWindowContent(venue),
        })
        infoWindowRef.current.open(mapRef.current, marker)
      })

      markersRef.current.push(marker)
    })
  }

  const createInfoWindowContent = (venue: Venue) => {
    return `
      <div class="p-4 max-w-sm">
        <h3 class="font-bold text-lg">${venue.name}</h3>
        <p class="text-sm text-gray-600">${venue.address}</p>
        <div class="mt-2">
          <div class="flex items-center">
            <span class="text-yellow-500">★</span>
            <span class="ml-1">${venue.rating} (${venue.totalRatings} reviews)</span>
          </div>
        </div>
      </div>
    `
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("what!!");
    console.log(lat);
    console.log(lng);
    //const formData = new FormData();
    // formData.set('name', "hello");

    const formDataToSend = new FormData();
    const now = new Date();

    // Get specific components
    const currentDate = now.toLocaleDateString(); // e.g., "10/5/2024"
    const currentTime = now.toLocaleTimeString(); // e.g., "3:30:15 PM"
    // Append name and description from the form data state
    formDataToSend.append('name', formData.name); // Correctly append name
    formDataToSend.append('description', formData.description); // Correctly append description
    formDataToSend.append('location', JSON.stringify({ lat: lat, lng: lng })); // Append location as JSON string

    formDataToSend.set('location', stringify({ lat: lat, lng: lng }));
    formDataToSend.set('date', currentDate);
    formDataToSend.set('time', currentTime);
    // formData.set('description', "description");

    // formData.set('name', formData.name); // This line is incorrect and should be removed
    //setFormData({ name: '', description: '' });

    // Send a POST request to your API
    try {
      const response = await fetch('http://localhost:8000/upload-string/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Handle success (e.g., close modal, clear form, etc.)
        setIsModalOpen(false);
        setFormData({ name: '', description: '' });
        console.log("Submission successful!");
      } else {
        // Handle error
        console.error('Failed to submit:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {
    console.log("Modal state changed:", isModalOpen);
    console.log(isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    console.log("hello");
    if (isLoaded && !mapRef.current) {
      mapRef.current = new google.maps.Map(document.getElementById('map')!, {
        center: { lat: 42.44233661513344, lng: -76.48545504165095 },
        zoom: 15,
        disableDefaultUI: true,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      })

      // Add right-click event listener
      mapRef.current.addListener('rightclick', (event: { latLng: { lat: () => any; lng: () => any } }) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        console.log(`Right clicked at: Latitude: ${lat}, Longitude: ${lng}`);
        console.log("hello 1 ");
        setLat(lat);
        setLng(lng);

        setIsModalOpen(true);
        console.log(isModalOpen);

      });

      const input = document.getElementById('pac-input') as HTMLInputElement
      searchBoxRef.current = new google.maps.places.SearchBox(input)

      searchBoxRef.current.addListener('places_changed', () => {
        const places = searchBoxRef.current?.getPlaces()
        if (!places || places.length === 0) return

        const bounds = new google.maps.LatLngBounds()
        places.forEach(place => {
          if (!place.geometry || !place.geometry.location) return
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport)
          } else {
            bounds.extend(place.geometry.location)
          }
        })

        mapRef.current?.fitBounds(bounds)
        setIsExpanded(false)
      })

      updateMarkers()
    }
  }, [isLoaded])

  useEffect(() => {
    updateMarkers()
  }, [filters])

  if (loadError) {
    return <div>Error loading maps</div>
  }

  if (!isLoaded) {
    return <div>Loading maps...</div>
  }

  return (
    <div className="relative h-screen w-full">
      <div id="map" className="absolute inset-0" />

      {/* Search and Filters Container */}
      <div className="absolute top-4 left-4 right-4 md:left-8 md:right-auto md:w-96 space-y-4 z-[1000]">
        {/* Search Bar */}
        <Card>
          <CardContent className="p-0">
            <div className="flex items-center p-3 h-12">
              <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <input
                id="pac-input"
                type="text"
                placeholder="Search places..."
                className="flex-1 ml-2 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsExpanded(true)}
              />
              {isExpanded && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsExpanded(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Filters */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Accessibility Filters</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          {showFilters && (
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="wheelchair"
                  checked={filters.wheelchair}
                  onCheckedChange={(checked) =>
                    setFilters({ ...filters, wheelchair: checked as boolean })
                  }
                />
                <label
                  htmlFor="wheelchair"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <div className="flex items-center space-x-2">
                    <Accessibility className="w-4 h-4" />
                    <span>Wheelchair Access</span>
                  </div>
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hearingLoop"
                  checked={filters.hearingLoop}
                  onCheckedChange={(checked) =>
                    setFilters({ ...filters, hearingLoop: checked as boolean })
                  }
                />
                <label
                  htmlFor="hearingLoop"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <div className="flex items-center space-x-2">
                    <Ear className="w-4 h-4" />
                    <span>Hearing Loop</span>
                  </div>
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="brailleSignage"
                  checked={filters.brailleSignage}
                  onCheckedChange={(checked) =>
                    setFilters({ ...filters, brailleSignage: checked as boolean })
                  }
                />
                <label
                  htmlFor="brailleSignage"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>Braille Signage</span>
                  </div>
                </label>
              </div>
            </CardContent>
          )}
        </Card>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 space-y-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setShowLegend(!showLegend)}
          className="rounded-full"
        >
          <Info className="w-5 h-5" />
        </Button>
      </div>

      {/* Legend */}
      {showLegend && (
        <Card className="absolute bottom-20 right-4 w-64">
          <CardHeader>
            <CardTitle>Map Legend</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <span className="text-sm">Fully Accessible</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <span className="text-sm">Partially Accessible</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Venue Details Modal */}
      {isModalOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-lg">Add Venue</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Description:</label>
                <input
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Submit  </button>
              <button type="button" onClick={() => {
                setIsModalOpen(false),
                  setFormData({ name: '', description: '' })

              }}>  Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Help Alert */}
      <Alert className="absolute bottom-4 left-4 max-w-md">
        <Info className="h-4 w-4" />
        <AlertTitle>Quick Tips</AlertTitle>
        <AlertDescription>
          Use the filters above to find accessible venues. Click on markers for more details.
        </AlertDescription>
      </Alert>
    </div>
  )
}