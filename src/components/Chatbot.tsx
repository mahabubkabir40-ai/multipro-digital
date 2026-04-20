'use client'

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, CheckCircle, User } from 'lucide-react';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'Hi there! 👋 Want to stop fighting for shared moving leads and get exclusive calls?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasCapturedLead, setHasCapturedLead] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (type: 'bot' | 'user', text: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), type, text }]);
  };

  const getBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    // Pricing Keywords
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much')) {
      return "Pricing depends on your target city and fleet size. Most of our clients see a 5x ROI within 90 days! I'll have a strategist send over a custom quote—what's your best email or phone number?";
    }
    
    // Time/Results Keywords
    if (lowerInput.includes('long') || lowerInput.includes('time') || lowerInput.includes('when')) {
      return "We typically start generating exclusive phone calls within 14–21 days of launching your campaign. To check availability in your specific zip code, what's your email or number?";
    }

    // "How it works"
    if (lowerInput.includes('how') || lowerInput.includes('work') || lowerInput.includes('process')) {
      return "We build high-converting systems that target high-ticket moves and dominate the Google Map Pack. It's fully automated for you! Where should we send the full breakdown of our process (Email or Phone)?";
    }

    // Default response (Steer to lead capture)
    return "That's a great question! I'm adding that to our notes. What's the best email or number to send you a detailed answer along with your free SEO audit?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isSubmitting) return;
    
    const userText = inputValue;
    setInputValue('');
    addMessage('user', userText);

    // If we haven't captured contact info yet, analyze the text
    if (!hasCapturedLead) {
      // Check if it looks like contact info (simple regex for email or phone)
      const isContactInfo = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}|(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}/.test(userText);
      
      if (isContactInfo) {
        setIsSubmitting(true);
        try {
          // Send to Web3Forms
          await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
              subject: '🚀 New Chatbot Lead',
              contact_info: userText,
              message: 'Lead captured via interactive chat brain.'
            })
          });
          setHasCapturedLead(true);
          setTimeout(() => {
            addMessage('bot', "Got it! ✅ One of our move marketing experts will reach out shortly with your custom growth plan. Is there anything else you'd like to know?");
          }, 800);
        } catch (error) {
          console.error(error);
          setHasCapturedLead(true);
          addMessage('bot', "Thanks! I've received that. We'll be in touch very soon! 🚀");
        } finally {
          setIsSubmitting(false);
        }
      } else {
        // Not contact info - provide smart answer
        setTimeout(() => {
          const response = getBotResponse(userText);
          addMessage('bot', response);
        }, 800);
      }
    } else {
      // Already have lead, just be polite
      setTimeout(() => {
        addMessage('bot', "I've noted that for our strategist! We'll discuss it during our call. Anything else?");
      }, 800);
    }
  };

  const handleQuickOption = (text: string) => {
    addMessage('user', text);
    setTimeout(() => {
      addMessage('bot', `Great choice! We specialize in exactly that. To get started on your free audit for ${text}, what is the best email or phone number to reach you at?`);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-brand-lime text-brand-blue shadow-[0_0_20px_rgba(154,251,22,0.4)] hover:shadow-[0_0_30px_rgba(154,251,22,0.6)] transform hover:-translate-y-1 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border border-white"></span>
        </span>
      </button>

      <div className={`fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[400px] h-[600px] max-h-[85vh] bg-slate-900 rounded-3xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-500 origin-bottom-right flex flex-col ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-white/10 p-5 flex justify-between items-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:10px_10px] mix-blend-overlay" />
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full border border-cyan-400/50 bg-slate-800 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Bot className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-white font-bold font-sans">MultiPro AI Assistant</h4>
              <p className="text-xs text-cyan-400 font-sans flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Always Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-1 relative z-10"><X className="w-6 h-6" /></button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-5 overflow-y-auto bg-slate-900/90 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 shrink-0 rounded-full border flex items-center justify-center ${msg.type === 'user' ? 'bg-cyan-500/20 border-cyan-400/30' : 'bg-slate-800 border-white/10'}`}>
                {msg.type === 'bot' ? <Bot className="w-5 h-5 text-cyan-400" /> : <User className="w-5 h-5 text-cyan-300" />}
              </div>
              <div className={`p-4 rounded-2xl text-sm font-sans shadow-lg max-w-[80%] ${msg.type === 'user' ? 'bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 border border-cyan-400/20 text-white rounded-tr-sm' : 'bg-slate-800 border border-white/10 text-gray-200 rounded-tl-sm'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {messages.length === 1 && (
            <div className="flex flex-col gap-2 pl-11">
              <button onClick={() => handleQuickOption('I need exclusive calls')} className="bg-transparent border border-cyan-400/40 text-cyan-400 text-xs font-sans px-4 py-2 rounded-xl text-left hover:bg-cyan-400/10 transition-colors w-fit">I need exclusive calls</button>
              <button onClick={() => handleQuickOption('Dominate the Map Pack')} className="bg-transparent border border-emerald-400/40 text-emerald-400 text-xs font-sans px-4 py-2 rounded-xl text-left hover:bg-emerald-400/10 transition-colors w-fit">Dominate the Map Pack</button>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-slate-800/50 border-t border-white/10">
          <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-slate-900 border border-white/10 rounded-full p-1 pl-4 focus-within:border-cyan-400/50 transition-all">
            <input 
              type="text" 
              placeholder="Ask anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isSubmitting}
              className="flex-1 bg-transparent text-sm text-white focus:outline-none font-sans disabled:opacity-50"
            />
            <button type="submit" disabled={isSubmitting} className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center text-brand-blue hover:bg-brand-lime-hover disabled:opacity-50 transition-all shrink-0">
              {isSubmitting ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-4 h-4 ml-1" />}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
