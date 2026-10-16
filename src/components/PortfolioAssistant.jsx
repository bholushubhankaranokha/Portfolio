import { useEffect, useRef, useState } from 'react';
import { X, Send, RotateCcw, Sparkles } from 'lucide-react';
import { assistantKnowledge, profile } from '../data/portfolio';

// Modern AI Logo
function ModernAiLogo({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`modern-ai-svg ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
        fill="currentColor"
      />
      <circle cx="19.5" cy="4.5" r="2" fill="currentColor" opacity="0.85" />
      <circle cx="4.5" cy="19.5" r="1.5" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

const suggestedQuestions = [
  { label: '🚀 Projects', prompt: 'Tell me about your featured projects' },
  { label: '🤖 RescueAI', prompt: 'Tell me about the RescueAI project' },
  { label: '⚡ Tech Stack', prompt: 'What technologies and skills do you specialize in?' },
  { label: '🎓 Education', prompt: 'Tell me about your education and degree' },
  { label: '📜 Certificates', prompt: 'What certificates and achievements do you have?' },
  { label: '💼 Experience', prompt: 'Tell me about your internship experience' },
  { label: '📄 Resume', prompt: 'How can I view or download your resume?' },
  { label: '🐙 GitHub', prompt: 'Tell me about your GitHub contributions' },
  { label: '🌦️ Weather AI', prompt: 'Tell me about your Bi-LSTM Weather Forecasting project' },
  { label: '💡 IoT Projects', prompt: 'What IoT and hardware projects have you built?' },
  { label: '📬 Contact', prompt: 'How can I contact or hire you?' }
];

function getAnswer(text) {
  const q = text.toLowerCase().replace(/['"’?!.,]/g, ' ').trim();
  const words = q.split(/\s+/).filter(Boolean);

  const found = assistantKnowledge.find(item =>
    item.keys.some(key => q.includes(key) || words.includes(key))
  );
  if (found) return found.answer;

  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('namaste')) {
    return `Hello! 👋 I'm Bholu's AI Assistant. Ask me anything about his AI/ML projects (like RescueAI), full-stack apps (like LogiEdge), skills, certifications, education, or how to get in touch!`;
  }

  return `I can help you with details about Bholu's work, including:\n• Featured Projects (RescueAI, LogiEdge, Weather Forecasting)\n• Technical Skills & Tools\n• Education & Certifications\n• Internship Experience\n• Résumé & GitHub Stats\n• Contact & Collaboration details.\n\nTry clicking one of the suggested topics below!`;
}

const welcome = {
  role: 'assistant',
  text: `Hi! 👋 I'm Bholu's Portfolio AI Assistant. How can I help you today? Explore the quick topics below or ask any question about my projects, skills, education, or experience.`
};

export default function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([welcome]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, open]);

  const send = (value = input) => {
    const text = value.trim();
    if (!text) return;
    setMessages(m => [
      ...m,
      { role: 'user', text },
      { role: 'assistant', text: getAnswer(text) }
    ]);
    setInput('');
  };

  return (
    <>
      {open && (
        <section className="chat-panel" aria-label="Portfolio AI Assistant">
          <header className="chat-head">
            <span className="chat-avatar modern-ai-avatar">
              <ModernAiLogo size={20} />
            </span>
            <div>
              <strong>Ask AI</strong>
              <small>
                <span className="online-dot" /> AI Assistant · Online
              </small>
            </div>
            <button
              className="icon-btn"
              aria-label="Restart chat"
              title="Restart conversation"
              onClick={() => setMessages([welcome])}
            >
              <RotateCcw size={16} />
            </button>
            <button
              className="icon-btn"
              aria-label="Close chat"
              title="Close chat"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </header>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-message ${m.role}`}>
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Quick Questions permanently available */}
          <div className="chat-suggestions-container" aria-label="Quick questions">
            <div className="suggestions-label-row">
              <Sparkles size={12} className="suggestions-label-icon" />
              <span className="suggestions-label-text">quick question</span>
            </div>
            <div className="suggestions-scroll-track">
              {suggestedQuestions.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="suggestion-chip-btn"
                  onClick={() => send(s.prompt)}
                  title={`Ask: ${s.prompt}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <form
            className="chat-form"
            onSubmit={e => {
              e.preventDefault();
              send();
            }}
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask anything about Bholu's work..."
              aria-label="Message the assistant"
            />
            <button className="send-btn" aria-label="Send message" type="submit">
              <Send size={16} />
            </button>
          </form>
        </section>
      )}

      <button
        className="assistant-launcher"
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close AI assistant' : 'Open Ask AI assistant'}
        title="Ask AI Assistant"
      >
        {open ? (
          <X size={20} />
        ) : (
          <div className="modern-ai-launcher-icon">
            <ModernAiLogo size={20} />
          </div>
        )}
        <span>{open ? 'Close' : 'Ask AI'}</span>
      </button>
    </>
  );
}
