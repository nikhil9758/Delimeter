import React, { useState, useEffect, useRef } from 'react';

const MyTest = () => {
  const [rows, setRows] = useState([]);
  const [text, setText] = useState('');
  const containerRef = useRef(null);
  const numberTextAreaRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(()=>{
    addRows();
  },[])

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current &&
        containerRef.current.scrollHeight - containerRef.current.scrollTop ===
          containerRef.current.clientHeight
      ) {
        // When scrolled to the bottom, add more rows
        addRows();
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  useEffect(() => {
    // Scroll numbers and text area to the bottom when new text is added
    if (numberTextAreaRef.current && textAreaRef.current) {
      numberTextAreaRef.current.scrollTop = numberTextAreaRef.current.scrollHeight;
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
      addRows()
    }
  }, [text]); // Scroll effect on text change

  const addRows = () => {
    // Simulate adding more rows, you can replace this with your logic to fetch new data.
    const newRows = Array.from({ length: 10 }, (_, index) => `Row ${index + rows.length + 1}`);
    setRows((prevRows) => [...prevRows, ...newRows]);

    // Update numbers in the left-side textarea
    if (numberTextAreaRef.current) {
      numberTextAreaRef.current.value += newRows.map((_, index) => `${index + rows.length + 1}\n`).join('');
    }
  };

  const handleTextChange = (event) => {
    // Update text and trigger scrolling effect
    console.log("text...",event.target.value)
    setText(event.target.value);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          height: '400px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          flex: '1',
        }}
        ref={containerRef}
      >
        {/* Display existing rows */}
        {rows.map((row, index) => (
          <div key={index} style={{ padding: '8px', margin: '4px 0' }}>
            {row}
          </div>
        ))}
        <textarea
          className=''
          ref={textAreaRef}
          value={text}
          onChange={handleTextChange}
          style={{ height: '400px', width: '150px', marginLeft: '70px', border:'1px solid black' }}
        />
      </div>

      <div style={{ width: '200px', marginLeft: '20px' }}>
        {/* Left-side textarea for numbers */}
        <textarea
          ref={numberTextAreaRef}
          readOnly
          style={{ height: '400px', width: '50px', float: 'left' }}
        />

        {/* Right-side textarea for text */}
        
      </div>
    </div>
  );
};

export default MyTest;

