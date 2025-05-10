import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ClipboardList,
  User,
  Settings,
  MoreHorizontal,
  Calendar,
  Clock,
  MapPin,
  Ban,
  Eye,
  MessageCircle,
  Star,
  CheckCircle,
  AlertCircle,
  Shield,
} from "lucide-react";

// Mock data for demonstration
const bookings = [
  {
    id: "B001",
    service: "Plumbing",
    date: "2025-05-12",
    time: "10:00 AM",
    status: "upcoming",
    address: "10 Downing Street, London",
    provider: "John Smith",
    price: "£85",
  },
  {
    id: "B002",
    service: "Electrical",
    date: "2025-05-09",
    time: "02:30 PM",
    status: "completed",
    address: "15 Baker Street, London",
    provider: "Sarah Johnson",
    price: "£120",
    rating: 4,
  },
  {
    id: "B003",
    service: "AC Repair",
    date: "2025-05-05",
    time: "09:15 AM",
    status: "completed",
    address: "22 Oxford Street, London",
    provider: "Mike Thompson",
    price: "£150",
    rating: 5,
  },
  {
    id: "B004",
    service: "Painting",
    date: "2025-05-20",
    time: "11:00 AM",
    status: "upcoming",
    address: "7 Park Lane, London",
    provider: "David Wilson",
    price: "£240",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null);
  
  const upcomingBookings = bookings.filter(booking => booking.status === "upcoming");
  const pastBookings = bookings.filter(booking => booking.status === "completed");
  
  const handleCancelBooking = (bookingId: string) => {
    setSelectedBooking(bookingId);
    setCancelDialogOpen(true);
  };
  
  const confirmCancelBooking = () => {
    // Here would be API call to cancel booking
    console.log("Cancelling booking:", selectedBooking);
    setCancelDialogOpen(false);
  };
  
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl">Jane Doe</CardTitle>
                <CardDescription>jane.doe@example.com</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="flex flex-col space-y-1">
                  <Button 
                    variant={activeTab === "bookings" ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("bookings")}
                  >
                    <ClipboardList className="mr-2 h-4 w-4" />
                    My Bookings
                  </Button>
                  <Button 
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button 
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </nav>
              </CardContent>
              <CardFooter className="border-t pt-4 mt-4">
                <Button variant="outline" className="w-full">Sign Out</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <TabsContent value="bookings" className="mt-0" forceMount={activeTab === "bookings"}>
              <Tabs defaultValue="upcoming">
                <TabsList className="mb-4">
                  <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
                  <TabsTrigger value="past">Past Bookings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Bookings</CardTitle>
                      <CardDescription>
                        View and manage your scheduled services
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {upcomingBookings.length > 0 ? (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Service</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Time</TableHead>
                              <TableHead>Provider</TableHead>
                              <TableHead>Price</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {upcomingBookings.map((booking) => (
                              <TableRow key={booking.id}>
                                <TableCell className="font-medium">{booking.service}</TableCell>
                                <TableCell>{booking.date}</TableCell>
                                <TableCell>{booking.time}</TableCell>
                                <TableCell>{booking.provider}</TableCell>
                                <TableCell>{booking.price}</TableCell>
                                <TableCell>
                                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                    Confirmed
                                  </span>
                                </TableCell>
                                <TableCell className="text-right">
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Open menu</span>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuLabel>Options</DropdownMenuLabel>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuItem>
                                        <Eye className="mr-2 h-4 w-4" />
                                        View Details
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        <MessageCircle className="mr-2 h-4 w-4" />
                                        Contact Provider
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        <Calendar className="mr-2 h-4 w-4" />
                                        Reschedule
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleCancelBooking(booking.id)}>
                                        <Ban className="mr-2 h-4 w-4" />
                                        Cancel Booking
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      ) : (
                        <div className="text-center py-8">
                          <ClipboardList className="mx-auto h-12 w-12 text-slate-400" />
                          <h3 className="mt-2 text-lg font-medium">No upcoming bookings</h3>
                          <p className="mt-1 text-slate-500">Book a service to get started</p>
                          <Button className="mt-4" asChild>
                            <a href="/book">Book a Service</a>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="past">
                  <Card>
                    <CardHeader>
                      <CardTitle>Past Bookings</CardTitle>
                      <CardDescription>
                        View your service history and leave reviews
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {pastBookings.length > 0 ? (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Service</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Provider</TableHead>
                              <TableHead>Price</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Rating</TableHead>
                              <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {pastBookings.map((booking) => (
                              <TableRow key={booking.id}>
                                <TableCell className="font-medium">{booking.service}</TableCell>
                                <TableCell>{booking.date}</TableCell>
                                <TableCell>{booking.provider}</TableCell>
                                <TableCell>{booking.price}</TableCell>
                                <TableCell>
                                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                                    Completed
                                  </span>
                                </TableCell>
                                <TableCell>
                                  {booking.rating ? (
                                    <div className="flex items-center">
                                      {Array.from({ length: 5 }).map((_, i) => (
                                        <Star 
                                          key={i} 
                                          className={`h-4 w-4 ${i < booking.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} 
                                        />
                                      ))}
                                    </div>
                                  ) : (
                                    <Button variant="outline" size="sm">
                                      Rate
                                    </Button>
                                  )}
                                </TableCell>
                                <TableCell className="text-right">
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                          <Eye className="h-4 w-4" />
                                        </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>View Details</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      ) : (
                        <div className="text-center py-8">
                          <ClipboardList className="mx-auto h-12 w-12 text-slate-400" />
                          <h3 className="mt-2 text-lg font-medium">No past bookings</h3>
                          <p className="mt-1 text-slate-500">Your service history will appear here</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </TabsContent>
            
            <TabsContent value="profile" className="mt-0" forceMount={activeTab === "profile"}>
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your account information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none" htmlFor="first-name">
                        First Name
                      </label>
                      <Input id="first-name" defaultValue="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none" htmlFor="last-name">
                        Last Name
                      </label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none" htmlFor="email">
                      Email
                    </label>
                    <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none" htmlFor="phone">
                      Phone Number
                    </label>
                    <Input id="phone" defaultValue="07123 456789" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none" htmlFor="address">
                      Address
                    </label>
                    <Input id="address" defaultValue="10 Downing Street" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none" htmlFor="city">
                        City
                      </label>
                      <Input id="city" defaultValue="London" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none" htmlFor="postcode">
                        Postcode
                      </label>
                      <Input id="postcode" defaultValue="SW1A 1AA" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-0" forceMount={activeTab === "settings"}>
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Booking Confirmations</h4>
                        <p className="text-sm text-slate-500">Receive emails when a booking is confirmed</p>
                      </div>
                      <div>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" defaultChecked className="form-checkbox rounded text-primary focus:ring-primary focus:ring-offset-0" />
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Reminders</h4>
                        <p className="text-sm text-slate-500">Receive reminder emails 24 hours before service</p>
                      </div>
                      <div>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" defaultChecked className="form-checkbox rounded text-primary focus:ring-primary focus:ring-offset-0" />
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Promotional Emails</h4>
                        <p className="text-sm text-slate-500">Receive updates about special offers and discounts</p>
                      </div>
                      <div>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="form-checkbox rounded text-primary focus:ring-primary focus:ring-offset-0" />
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Security</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Change Password</h4>
                        <p className="text-sm text-slate-500">Update your account password</p>
                      </div>
                      <Button variant="outline" size="sm">Change</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-slate-500">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline" size="sm">Setup</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Payment Methods</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Manage Payment Methods</h4>
                        <p className="text-sm text-slate-500">Add or remove payment cards</p>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </div>
      </main>
      
      <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Booking</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this booking? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg bg-slate-50 p-4">
              {selectedBooking && upcomingBookings.find(b => b.id === selectedBooking) && (
                <>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                    <span className="text-sm font-medium">
                      {upcomingBookings.find(b => b.id === selectedBooking)?.date}
                    </span>
                    <Clock className="h-4 w-4 ml-4 mr-2 text-slate-500" />
                    <span className="text-sm font-medium">
                      {upcomingBookings.find(b => b.id === selectedBooking)?.time}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Shield className="h-4 w-4 mr-2 text-slate-500" />
                    <span className="text-sm font-medium">
                      {upcomingBookings.find(b => b.id === selectedBooking)?.service}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                    <span className="text-sm">
                      {upcomingBookings.find(b => b.id === selectedBooking)?.address}
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className="mt-4 flex items-center">
              <AlertCircle className="h-4 w-4 text-amber-500 mr-2" />
              <span className="text-sm text-slate-600">
                Cancellations made within 24 hours of the scheduled service may incur a fee.
              </span>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
              Keep Booking
            </Button>
            <Button variant="destructive" onClick={confirmCancelBooking}>
              Cancel Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </>
  );
};

export default Dashboard;
