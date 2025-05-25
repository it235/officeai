import * as React from "react";
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

interface ChatMessage {
  content: string;
  time: string;
  from: "me" | "ai";
  isStreaming?: boolean;
}

interface ChatContentProps {
  messages: ChatMessage[];
  input: string;
  onInputChange: (v: string) => void;
  onSend: () => void;
  onClear: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

// marked配置：代码高亮和换行
marked.use({
  extensions: [
    {
      name: 'code',
      renderer(...args: any[]) {
        let code = '';
        let lang = '';
        if (typeof args[0] === 'object' && args[0] && args[0].type === 'code') {
          code = args[0].text || '';
          lang = args[0].lang || '';
        } else {
          code = args[0];
          lang = (args[1] || '').split(/\s+/)[0];
        }
        const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
        const highlighted = hljs.highlight(validLang, code).value;
        return `<pre><code class="hljs ${validLang}">${highlighted}</code></pre>`;
      }
    }
  ],
  breaks: true
});

function getDisplayContent(msg: ChatMessage) {
  let content = msg.content || '';
  // 补全流式未闭合代码块
  if (
    msg.isStreaming &&
    content.match(/```[a-zA-Z0-9]*\n[\s\S]*$/) &&
    !content.trim().endsWith('```')
  ) {
    content += '\n```';
  }
  return content;
}

const ChatContent: React.FC<ChatContentProps> = ({
  messages,
  input,
  onInputChange,
  onSend,
  onClear,
  onKeyDown,
}) => {
  return (
    <>
      {/* 聊天内容区，flex: 1 可滚动，底部留出输入区高度，overflow: auto，first_description被输入区遮挡 */}
      <div style={{flex: 1, overflow: 'auto', minHeight: 0, paddingBottom: 120,paddingLeft:10, position: 'relative'}} id="chat-container">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'row', // 始终左对齐
              alignItems: 'flex-start',
              margin: '12px 0',
            }}
          >
            {/* 头像 */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: msg.from === 'me' ? '#5DC1C7' : '#4a6fa5',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 16,
                marginRight: 12,
                flexShrink: 0,
              }}
            >{msg.from === 'me' ? '我' : 'AI'}</div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              maxWidth: '70%',
            }}>
              <div
                style={{
                  background: msg.from === 'me' ? '#f6f8fa' : '#e6f0fa',
                  color: '#333',
                  borderRadius: 8,
                  padding: '10px 16px',
                  fontSize: 15,
                  wordBreak: 'break-all',
                  textAlign: 'left',
                  minWidth: 60,
                }}
                dangerouslySetInnerHTML={msg.from === 'ai' ? { __html: marked(getDisplayContent(msg)) } : undefined}
              >{msg.from === 'me' ? msg.content : null}</div>
              <span style={{
                fontSize: 12,
                color: '#888',
                marginTop: 4,
                alignSelf: 'flex-start',
              }}>{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
      {/* 消息输入区，完全固定在底部 */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#fff', padding: '16px 0 0 0', zIndex: 100, boxShadow: '0 -2px 8px rgba(0,0,0,0.04)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12, padding: '0 20px 20px 20px' }}>
          <textarea
            style={{
              width: '100%',
              minHeight: 60,
              fontSize: '1em',
              padding: 8,
              borderRadius: 4,
              border: '1px solid #ccc',
              resize: 'vertical',
              fontFamily: 'inherit',
            }}
            placeholder="请输入消息..."
            value={input}
            onChange={e => onInputChange(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              style={{
                background: '#4a6fa5',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                padding: '8px 20px',
                fontSize: '1em',
                cursor: 'pointer',
                fontWeight: 500,
              }}
              onClick={onSend}
            >发送</button>
            <button
              style={{
                background: '#f0f0f0',
                color: '#4a6fa5',
                border: '1px solid #4a6fa5',
                borderRadius: 4,
                padding: '8px 20px',
                fontSize: '1em',
                cursor: 'pointer',
                fontWeight: 500,
              }}
              onClick={onClear}
            >清空</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContent; 