import { useState } from 'react';
import { motion } from 'framer-motion';

const ChatInput = ({ onSend, isLoading }) => {
    const [message, setMessage] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() && !isLoading) {
            onSend(message);
            setMessage('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const handleFileUpload = async (file) => {
        if (!file) return;
        
        setIsUploading(true);
        
        try {
            // Create a FormData object to send the file
            const formData = new FormData();
            formData.append('file', file);
            
            // Send the file to the backend
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });
            
            if (!response.ok) {
                throw new Error('Failed to upload file');
            }
            
            const data = await response.json();
            
            // Add the file content to the message
            onSend(`I've uploaded a file: ${file.name}\n\n${data.content}`);
        } catch (error) {
            console.error('Error uploading file:', error);
            // Notify the user of the error
            onSend(`Error uploading file: ${error.message}`, true);
        } finally {
            setIsUploading(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="w-full bg-dark-800 text-white placeholder-gray-500 rounded-xl px-4 py-3 pr-24
                             border border-dark-700 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 
                             shadow-sm resize-none h-[52px] max-h-32 overflow-y-auto
                             focus:outline-none transition-all duration-200"
                    style={{ minHeight: '52px' }}
                />
                <div className="absolute right-2 flex items-center space-x-2">
                    <motion.button
                        type="button"
                        className="p-2 text-primary-400 hover:text-primary-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            // Create a file input element
                            const fileInput = document.createElement('input');
                            fileInput.type = 'file';
                            fileInput.accept = '.txt,.pdf,.docx,.md';
                            fileInput.onchange = (e) => {
                                if (e.target.files && e.target.files[0]) {
                                    handleFileUpload(e.target.files[0]);
                                }
                            };
                            // Trigger the file input click
                            fileInput.click();
                        }}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                    </motion.button>
                    <motion.button
                        type="submit"
                        disabled={!message.trim() || isLoading || isUploading}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                            message.trim() && !isLoading && !isUploading
                                ? 'text-primary-400 hover:text-primary-300 hover:bg-dark-700'
                                : 'text-gray-600 cursor-not-allowed'
                        }`}
                        whileHover={message.trim() && !isLoading && !isUploading ? { scale: 1.1 } : {}}
                        whileTap={message.trim() && !isLoading && !isUploading ? { scale: 0.9 } : {}}
                    >
                        <svg className="w-5 h-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </motion.button>
                </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-2">
                    <span>Press</span>
                    <kbd className="px-2 py-1 bg-dark-700 text-gray-400 rounded-md border border-dark-600">
                        Enter
                    </kbd>
                    <span>to send,</span>
                    <kbd className="px-2 py-1 bg-dark-700 text-gray-400 rounded-md border border-dark-600">
                        Shift + Enter
                    </kbd>
                    <span>for new line</span>
                </div>
                {isLoading && (
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                        <span>Processing...</span>
                    </div>
                )}
                {isUploading && (
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent-purple-400 rounded-full animate-pulse" />
                        <span>Uploading file...</span>
                    </div>
                )}
            </div>
        </form>
    );
};

export default ChatInput;
