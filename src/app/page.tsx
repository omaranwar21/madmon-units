"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bed, Bath, Maximize, Plus, Bird } from "lucide-react";
import Image from "next/image";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  status: "Active" | "Sold" | "Reserved";
}

const properties: Property[] = [
  {
    id: 1,
    title: "Grand House Real Estate",
    location: "New Cairo, Egypt",
    price: 13500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    image: "/assets/marketeq_favourite.svg",
    // https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop
    status: "Active",
  },
  {
    id: 2,
    title: "Grand House Real Estate",
    location: "New Cairo, Egypt",
    price: 13500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    image: "/assets/marketeq_favourite.svg",
    // https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop
    status: "Reserved",
  },
  {
    id: 3,
    title: "Grand House Real Estate",
    location: "New Cairo, Egypt",
    price: 13500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    image: "/assets/marketeq_favourite.svg",
    // https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop
    status: "Active",
  },
];

const navItemsStyle = "text-[#0512F5] font-bold text-[20]";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b h-[109px] flex items-center">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bird className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">madman</span>
          </div>
          <nav className="flex items-center gap-[34px]">
            <a href="#" className={navItemsStyle}>
              Home
            </a>
            <a href="#" className={navItemsStyle}>
              About
            </a>
            <a href="#" className={navItemsStyle}>
              Contact
            </a>
            <a
              href="#"
              className={`flex items-center gap-[4px] justify-center ${navItemsStyle}`}
            >
              <Image
                className="mb-[2px]"
                alt=""
                src="/assets/marketeq_favourite.svg"
                width={21}
                height={19}
              />
              Favourite
            </a>
            <a
              href="#"
              className={`flex items-center gap-[4px] justify-center ${navItemsStyle}`}
            >
              <Image
                className="mb-[2px]"
                alt=""
                src="/assets/earth.svg"
                width={19}
                height={19}
              />
              EN
            </a>
            <Button variant="outline">Open Whatsapp</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="w-64">
            <h2 className="text-lg font-semibold mb-4">My Account</h2>
            <Input placeholder="My Units" className="mb-4" />
            <div className="text-sm text-gray-600">My Reservations</div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">My Units</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="21" x2="3" y1="6" y2="6" />
                    <line x1="21" x2="3" y1="12" y2="12" />
                    <line x1="21" x2="3" y1="18" y2="18" />
                  </svg>
                </Button>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" /> Add Unit
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {properties.map((property) => (
                <Card key={property.id} className="p-4">
                  <div className="flex gap-4">
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={200}
                      height={200}
                      className="w-48 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {property.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {property.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-red-500">
                            {property.price.toLocaleString()} EGP
                          </div>
                          <div className="text-sm text-gray-500">
                            Added {new Date().toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Bed className="h-4 w-4" />
                          <span>{property.bedrooms} Bedrooms</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Bath className="h-4 w-4" />
                          <span>{property.bathrooms} Bathrooms</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Maximize className="h-4 w-4" />
                          <span>{property.area} m²</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button variant="outline" className="w-full">
                          {property.status === "Active"
                            ? "Assign to Broker"
                            : property.status === "Reserved"
                            ? "Edit"
                            : "Sold"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Bird className="h-6 w-6" />
                <span className="text-xl font-bold">madman</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+2 0155 XXX XXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                  <span>example@mail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <div>About us</div>
                <div>Privacy Policy</div>
                <div>Support</div>
                <div>Terms & Conditions</div>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
