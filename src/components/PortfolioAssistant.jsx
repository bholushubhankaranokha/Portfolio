import { useEffect, useRef, useState } from 'react';
import { Bot, X, Send, RotateCcw, Sparkles } from 'lucide-react';
import { assistantKnowledge, profile } from '../data/portfolio';

function getAnswer(text) {
  const q = text.toLowerCase().replace(/[’']/g, '').trim();
  const found = assistantKnowledge.find(item => item.keys.some(key => q.includes(key)));
  if (found) return found.answer;
  if (q.includes('hello') || q.includes('hi ') || q === 'hi' || q.includes('hey')) return `Hello! I'm the portfolio assistant. Ask me about ${profile.name}'s education, skills, projects, internship, or contact details.`;
  return 'I can help with Bholu’s education, skills, RescueAI, weather forecasting, IoT projects, internship, résumé, and contact details. Try one of those topics.';
}
const welcome = { role:'assistant', text:'Hi! I’m the portfolio assistant. Ask me about projects, skills, education, or experience.' };
export default function PortfolioAssistant() {
  const [open,setOpen] = useState(false);
  const [messages,setMessages] = useState([welcome]);
  const [input,setInput] = useState('');
  const endRef = useRef(null);
  useEffect(() => { endRef.current?.scrollIntoView({behavior:'smooth',block:'end'}); }, [messages,open]);
  const send = (value=input) => {
    const text = value.trim(); if (!text) return;
    setMessages(m => [...m, {role:'user',text}, {role:'assistant',text:getAnswer(text)}]); setInput('');
  };
  return <>
    {open && <section className="chat-panel" aria-label="Portfolio assistant">
      <header className="chat-head"><span className="chat-avatar"><Bot size={20}/></span><div><strong>Portfolio Assistant</strong><small><span className="online-dot"/> Available locally · No API</small></div><button className="icon-btn" aria-label="Restart chat" onClick={()=>setMessages([welcome])}><RotateCcw size={16}/></button><button className="icon-btn" aria-label="Close chat" onClick={()=>setOpen(false)}><X size={18}/></button></header>
      <div className="chat-messages">{messages.map((m,i)=><div key={i} className={`chat-message ${m.role}`}>{m.text}</div>)}<div ref={endRef}/></div>
      {messages.length===1 && <div className="suggestions"><button onClick={()=>send('Tell me about your projects')}>Projects</button><button onClick={()=>send('What is your tech stack?')}>Tech stack</button><button onClick={()=>send('Tell me about your education')}>Education</button></div>}
      <form className="chat-form" onSubmit={e=>{e.preventDefault();send();}}><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask me something…" aria-label="Message the assistant"/><button className="send-btn" aria-label="Send message"><Send size={17}/></button></form>
      <p className="chat-disclaimer"><Sparkles size={12}/> Local portfolio answers · No external AI connected</p>
    </section>}
    <button className="assistant-launcher" onClick={()=>setOpen(v=>!v)} aria-label={open?'Close portfolio assistant':'Open portfolio assistant'}>{open?<X/>:<Bot/>}<span>{open?'Close':'Ask me'}</span></button>
  </>;
}
