import styles from "./chat.module.scss";
import { ChatComponent } from "@/features/chat/components";

const Chat: React.FC = () => {
  return (
    <main role="main">
      <h1 className={`test3 ${styles.test1}`}>Chatページ</h1>
      <p className="test3">TEST3</p>
      <ChatComponent />
    </main>
  );
};

export default Chat;
