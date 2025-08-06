import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import OpenAI from 'openai';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el Agente Chocolate de Chocolates Calcagno. ¿En qué puedo ayudarte hoy? Te puedo contar sobre nuestros deliciosos chocolates artesanales premium.',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Aquí necesitarás agregar tu API key de OpenAI
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `Eres el "Agente Chocolate" de Chocolates Calcagno, una empresa chilena de chocolates artesanales premium. Tu personalidad es amigable, conocedora y apasionada por el chocolate. 

INFORMACIÓN CLAVE:
- Chocolates Calcagno es una empresa chilena especializada en chocolates artesanales premium
- Ofrecemos bombones surtidos, tabletas de chocolate, trufas clásicas y regalos empresariales
- Nuestros productos son elaborados artesanalmente con ingredientes de la más alta calidad
- Tenemos servicio de regalos corporativos personalizados
- Contacto: chocolatecalcagno@gmail.com, +56 9 4856 1056
- Ubicación: Santiago, Chile
- Horarios: Lunes a Viernes 9:00-18:00, Sábado 10:00-14:00

INSTRUCCIONES:
- Siempre mantén el foco en Chocolates Calcagno y nuestros productos
- Sé entusiasta sobre la calidad artesanal y premium de nuestros chocolates
- Sugiere productos específicos según las necesidades del cliente
- Promociona nuestros regalos empresariales cuando sea apropiado
- Invita a contactarnos por WhatsApp o email para pedidos
- Responde en español chileno de manera amigable y profesional
- Si te preguntan sobre otros temas, redirige gentilmente hacia nuestros chocolates`
          },
          {
            role: 'user',
            content: inputText
          }
        ],
        max_tokens: 300,
        temperature: 0.7
      });

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.choices[0]?.message?.content || 'Lo siento, no pude procesar tu mensaje. ¿Podrías intentar de nuevo?',
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, estoy teniendo problemas técnicos. Mientras tanto, puedes contactarnos directamente por WhatsApp al +56 9 4856 1056 o por email a chocolatecalcagno@gmail.com',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 bg-chocolate-dark text-white p-4 rounded-full shadow-lg hover:bg-chocolate-light transition-colors duration-300 z-50"
        >
          <Bot className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-chocolate-dark text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              <span className="font-semibold">Agente Chocolate</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-chocolate-dark text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pregúntame sobre nuestros chocolates..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chocolate-dark text-sm"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputText.trim() || isLoading}
                className="bg-chocolate-dark text-white p-2 rounded-md hover:bg-chocolate-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;