import React, { useState } from 'react';
import EmojiPickerLib from 'emoji-picker-react'; // Renamed to avoid conflict

export default function EmojiPickerComponent() {
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  return (
    <div>
      <h1>Emoji Picker</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows="4" cols="50"></textarea>
      <div>
        <button onClick={() => setShowPicker(!showPicker)}>
          {showPicker ? "Hide Picker" : "Show Emoji Picker"}
        </button>
      </div>
      {showPicker && (
        <div className="emoji-picker">
          <EmojiPickerLib onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
}
