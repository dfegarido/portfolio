import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, RefreshCw, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { getChatResponse, streamResponse, getSuggestedQuestions } from '../services/chatService';
import { ChatMessage } from '../types';
import { PORTFOLIO_OWNER } from '../constants';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Hi! I'm here to help you learn about ${PORTFOLIO_OWNER}'s portfolio. Ask me anything about skills, projects, or experience!` }
  ]);
  const [suggestions, setSuggestions] = useState<string[]>(getSuggestedQuestions());
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e?: React.FormEvent, question?: string) => {
    e?.preventDefault();
    const questionText = question || input.trim();
    if (!questionText || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: questionText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setSuggestions([]); // Hide suggestions when user sends a message
    setIsLoading(true);

    // Get response from in-memory knowledge base
    try {
      const response = getChatResponse(questionText);
      
      // Add a placeholder message for the model that we will update
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      // Stream the response for smooth UI experience
      let fullResponse = "";
      const stream = streamResponse(response);
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          if (lastMsg.role === 'model') {
            lastMsg.text = fullResponse;
          }
          return newMessages;
        });
      }
      
      // Show new suggestions after response
      setSuggestions(getSuggestedQuestions());
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again or reach out directly via email.", isError: true }]);
      setSuggestions(getSuggestedQuestions());
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSubmit(undefined, suggestion);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-[400px] h-[500px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-200">
          {/* Header */}
          <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Portfolio Assistant</h3>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-6 h-6 rounded-full bg-cyan-900/50 flex-shrink-0 flex items-center justify-center mt-1">
                    <Bot size={14} className="text-cyan-400" />
                  </div>
                )}
                <div 
                  className={`
                    max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed
                    ${msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-sm' 
                      : msg.isError 
                        ? 'bg-red-500/10 text-red-200 border border-red-500/20 rounded-tl-sm'
                        : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-sm'
                    }
                  `}
                >
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center mt-1">
                    <User size={14} className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && messages[messages.length-1]?.role === 'user' && (
               <div className="flex gap-3 justify-start">
                 <div className="w-6 h-6 rounded-full bg-cyan-900/50 flex-shrink-0 flex items-center justify-center mt-1">
                    <Bot size={14} className="text-cyan-400" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl px-4 py-3 rounded-tl-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
               </div>
            )}
            
            {/* Suggested Questions */}
            {suggestions.length > 0 && !isLoading && messages[messages.length - 1]?.role === 'model' && (
              <div className="space-y-2 mt-2">
                <p className="text-xs text-slate-400 px-1">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full border border-slate-700 hover:border-cyan-500/50 transition-all duration-200 hover:text-cyan-400"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my experience..."
              className="flex-1 bg-slate-900 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-slate-700 placeholder:text-slate-500"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              variant="primary" 
              size="sm"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 p-0 rounded-lg"
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </Button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        variant="primary"
        className="h-14 w-14 rounded-full shadow-2xl shadow-cyan-500/40 hover:scale-105 transition-transform duration-200 p-0 flex items-center justify-center"
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>
    </div>
  );
};
