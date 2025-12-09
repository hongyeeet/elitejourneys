import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Message, findBestAnswer, getGreeting } from '../utils/chatbotLogic';
import { quickReplies } from '../data/faqData';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: Date.now().toString(),
        text: getGreeting(),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([greeting]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = findBestAnswer(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: answer,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-8 h-8 text-black" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-8 right-8 w-[420px] h-[600px] bg-black/90 backdrop-blur-xl border border-[#D4AF37] rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#C9A045] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-black font-bold text-lg">Elite Concierge</h3>
                <p className="text-black/80 text-xs">Your luxury travel assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/40 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-[#D4AF37] text-black'
                      : 'bg-white/10 text-white border border-[#D4AF37]/30'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <span className="text-xs opacity-60 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-[#D4AF37]/30 px-6 py-4 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1.5 bg-white/5 border border-[#D4AF37]/40 text-[#D4AF37] text-xs rounded-full hover:bg-[#D4AF37]/20 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <div className="p-4 bg-white/5 border-t border-[#D4AF37]/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/10 border border-[#D4AF37]/30 rounded-full px-4 py-2.5 text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 text-black" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
