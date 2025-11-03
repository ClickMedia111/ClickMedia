import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useToast } from '../hooks/use-toast';

const workshops = [
  { name: '3-Day Workshop', price: 15 },
  { name: 'Advanced Workshop', price: 25 },
  { name: 'Photo Editing Workshop', price: 20 },
];

const Workshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const getPrice = () => {
    const workshop = workshops.find((w) => w.name === selectedWorkshop);
    return workshop ? workshop.price : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xnnordor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          workshop: selectedWorkshop,
          price: getPrice(),
          _subject: 'New Workshop Registration - Click Media',
        }),
      });

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Workshop registration submitted successfully.',
        });
        setName('');
        setEmail('');
        setSelectedWorkshop('');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="workshops" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 playfair">
            Workshops
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Join our online workshops and enhance your photography skills!
          </p>
        </div>

        <Card className="p-8 shadow-xl">
          <div className="mb-6 text-center">
            <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
              COMING SOON
            </span>
          </div>
          <p className="text-gray-600 mb-8 text-center">
            Join our 3-day online workshop for just $15 per student. We also host
            other workshops—prices may vary.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="workshop">Select Workshop</Label>
              <Select value={selectedWorkshop} onValueChange={setSelectedWorkshop}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a workshop" />
                </SelectTrigger>
                <SelectContent>
                  {workshops.map((workshop) => (
                    <SelectItem key={workshop.name} value={workshop.name}>
                      {workshop.name} (${workshop.price})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">Price:</span>
                <span className="text-2xl font-bold text-gray-900">${getPrice()}</span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 py-6 text-lg font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Book Workshop'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Workshops;
