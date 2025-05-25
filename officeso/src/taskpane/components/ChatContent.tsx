import * as React from "react";

interface ChatMessage {
  content: string;
  time: string;
  from: "me" | "ai";
}

interface ChatContentProps {
  messages: ChatMessage[];
  input: string;
  onInputChange: (v: string) => void;
  onSend: () => void;
  onClear: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
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
      <div style={{flex: 1, overflow: 'auto', minHeight: 0, paddingBottom: 120, position: 'relative'}} id="chat-container">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: msg.from === 'me' ? 'row' : 'row-reverse',
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
                background: msg.from === 'me' ? '#ffe082' : '#4a6fa5',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 16,
                marginRight: msg.from === 'me' ? 12 : 0,
                marginLeft: msg.from === 'ai' ? 12 : 0,
                flexShrink: 0,
              }}
            >{msg.from === 'me' ? '我' : 'AI'}</div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.from === 'me' ? 'flex-start' : 'flex-end',
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
                  textAlign: msg.from === 'me' ? 'left' : 'right',
                }}
              >{msg.content}</div>
              <span style={{
                fontSize: 12,
                color: '#888',
                marginTop: 4,
                alignSelf: msg.from === 'me' ? 'flex-start' : 'flex-end',
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