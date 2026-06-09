// Components/BookingForm.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Mail, MessageSquare, Check, X } from "lucide-react";
import { DateRangePicker } from "react-date-range";
import emailjs from "@emailjs/browser";

interface BookingFormProps {
  apartmentName: string;
  disabledDates: Date[];
}

function BookingForm({ apartmentName, disabledDates }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [dateRange, setDateRange] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (dateRange[0].startDate.getTime() === dateRange[0].endDate.getTime()) {
      setNotification({
        type: 'error',
        message: 'Please select a valid date range'
      });
      setTimeout(() => setNotification({ type: null, message: '' }), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email logic here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      setNotification({
        type: 'success',
        message: 'Booking request sent successfully!'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setDateRange([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }]);
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification({ type: null, message: '' }), 5000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification.type && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 ${
              notification.type === 'success' 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}
          >
            {notification.type === 'success' ? (
              <Check className="w-5 h-5" />
            ) : (
              <X className="w-5 h-5" />
            )}
            <span className="font-medium">{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Form Fields */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Book Your Stay
            </h2>
            <p className="text-gray-600">
              Fill in your details and select your preferred dates
            </p>
          </div>

          {/* Name Input */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4" />
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="John Doe"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4" />
              <span>Email Address *</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4" />
              <span>Message (Optional)</span>
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Special requests or questions..."
            />
          </div>

          {/* Selected Dates Display */}
          <div className="p-4 bg-blue-50 rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-900">Selected Dates</span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <div>
                <p className="text-sm text-gray-500">Check-in</p>
                <p className="font-medium">
                  {dateRange[0].startDate.toLocaleDateString()}
                </p>
              </div>
              <div className="text-gray-400">→</div>
              <div>
                <p className="text-sm text-gray-500">Check-out</p>
                <p className="font-medium">
                  {dateRange[0].endDate.toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center space-x-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Sending Request...</span>
              </span>
            ) : (
              'Send Booking Request'
            )}
          </motion.button>
        </div>

        {/* Right Column - Calendar */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Select Your Dates
            </h3>
            <DateRangePicker
              ranges={dateRange}
              onChange={(item: any) => setDateRange([item.selection])}
              disabledDates={disabledDates}
              minDate={new Date()}
              rangeColors={['#3b82f6']}
              showDateDisplay={false}
              months={1}
              direction="horizontal"
              className="w-full"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
