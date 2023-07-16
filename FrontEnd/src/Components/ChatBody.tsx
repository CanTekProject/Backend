interface IChatBody {
  lastMessageRef: any;
  messages: any[];
}

export default function ChatBody({
  lastMessageRef,
  messages,
}: IChatBody) {
  return (
    <div className="flex flex-col border-2 w-4/12 bg-[#E6EAEA] h-64 overflow-x-hidden overflow-y-hidden">
      {messages.map((message) =>
        message.nickName === localStorage.getItem("nickName") ? (
          <div key={message._id}>
            <div className="py-1 px-1 ml-[40%]">You</div>
            <div className="bg-[#435F7A] text-white w-[45%]  rounded py-1 px-1 ml-2">
              {message.text}
            </div>
          </div>
        ) : (
          <div key={message.id}>
            <div className="py-1 px-1 ml-[91%]">{message.nickName}</div>
            <div className="bg-white text-black rounded w-[45%] py-1 px-1 ml-[53%]">
                {message.text}
            </div>
          </div>
        )
      )}

      <div ref={lastMessageRef} />
    </div>
  );
}
