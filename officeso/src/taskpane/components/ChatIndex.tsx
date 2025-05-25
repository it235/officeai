import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import useStyles from "./ChatStyles";
import ChatContent from "./ChatContent";


export interface HeaderProps {
    title: string;
    logo: string;
    message: string;
  }
  
interface ChatMessage {
  content: string;
  time: string;
  from: "me" | "ai";
}

const Chat: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { title, logo, message } = props;
    const styles = useStyles();
    const [input, setInput] = React.useState("");
    const [messages, setMessages] = React.useState<ChatMessage[]>([]);
    const [showDescription, setShowDescription] = React.useState(true);
    const [showChatPage, setShowChatPage] = React.useState(false);
  
    function formatDateTime(date: Date) {
      const pad = (n: number) => n.toString().padStart(2, '0');
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    }
    const handleSend = () => {
      if (input.trim() === "") return;
      if (showDescription) setShowDescription(false);
      const now = new Date();
      const time = formatDateTime(now);
      const newMsg: ChatMessage = { content: input, time, from: 'me' };
      setMessages(prev => {
        const updated = [...prev, newMsg];
        // AI回复
        setTimeout(() => {
          const aiMsg: ChatMessage = {
            content: `${input}`,
            time: formatDateTime(new Date()),
            from: 'ai',
          };
          setMessages(msgs => [...msgs, aiMsg]);
        }, 500);
        return updated;
      });
      setInput("");
    };
    const handleClear = () => setInput("");
  
    // 支持按回车发送
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };
  
    return (
      <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
        {showChatPage ? (
          <ChatContent
            messages={messages}
            input={input}
            onInputChange={setInput}
            onSend={handleSend}
            onClear={handleClear}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <>
            {/* 说明区 */}
            {showDescription && (
              <div className={styles.case_container} id="first_description" style={{flexShrink: 0, marginLeft: 15, marginTop: 5, marginRight: 15}}>
                <div className={styles.case_header}>
                    <h3>智能聊天模式说明</h3>
                </div>
                <div className={styles.case_content}>
                    <div className={styles.case_info}>
                        <p className={styles.case_info_p}>1.可输入任意文本，例如：A列加B列的值写入C列</p>
                        <p className={styles.case_info_p}>2.会话已自动开启上下文，您可通过不断提问纠正AI的回答</p>
                        <p className={styles.case_info_p}>3.使用前请配置大模型Api，<a className={styles.case_info_a} href="https://cloud.siliconflow.cn/i/PGhr3knx" target="_blank">点此取免费额度</a></p>
                        <p className={styles.case_info_p}>4.配置大模型提示词能够更快，更准确的得到你想要的答案</p>
                        <p className={styles.case_info_p}>5.如果没解决你的痛点，<a className={styles.case_info_a} href="https://jsj.top/f/OZJDfa" target="_blank">点击此处提出需求</a>，下个版本见</p>
                        <p className={styles.case_info_p}>6.聊天记录存放在"当前用户/文档/ExcelAiAppData"目录下</p>
                        <p className={styles.case_info_p}>7.当前版本:<span className={styles.version}>2.4.0</span>，<a className={styles.case_info_a} href="https://excel.it235.com" target="_blank">每周都上新功能哦</a></p>
                    </div>
                </div>
              </div>
            )}
            {/* 前往新页面聊天按钮，底部居中且不随内容滚动 */}
            <div style={{ position: 'fixed', left: 0, right: 0, bottom: 12, zIndex: 200, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
              <button
                style={{
                  background: 'linear-gradient(90deg, #4a6fa5 0%, #3d5a7c 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  padding: '10px 15px',
                  fontSize: '1.1em',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(74,111,165,0.08)',
                  letterSpacing: 1,
                  transition: 'background 0.2s',
                  pointerEvents: 'auto',
                }}
                onClick={() => setShowChatPage(true)}
              >进入智能AI模式</button>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default Chat;