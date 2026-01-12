import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate success
    setStatus('success');
    
    // Reset form status after a delay
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 glass-card p-8 rounded-2xl">
      <h3 className="text-xl font-bold text-slate-100 mb-4">Send a Message</h3>
      
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
          <input 
            required 
            type="text" 
            id="name"
            name="name"
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-600"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
          <input 
            required 
            type="email" 
            id="email"
            name="email"
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-600"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
        <textarea 
          required 
          id="message"
          name="message"
          rows={4}
          className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none placeholder:text-slate-600"
          placeholder="Hello! I'd like to discuss a project..."
        ></textarea>
      </div>

      <Button 
        type="submit" 
        disabled={status === 'submitting' || status === 'success'}
        className="w-full"
        size="lg"
      >
        {status === 'submitting' ? (
          <span className="flex items-center gap-2"><Loader2 size={18} className="animate-spin" /> Sending...</span>
        ) : status === 'success' ? (
          <span className="flex items-center gap-2 text-white"><CheckCircle size={18} /> Message Sent!</span>
        ) : (
          <span className="flex items-center gap-2"><Send size={18} /> Send Message</span>
        )}
      </Button>
    </form>
  );
};