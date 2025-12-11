import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ChatInterface } from '../ui/ChatInterface';

export function Chat() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            {/* サイドバー（左固定）。sm以上で表示、モバイルは非表示 */}
            <aside
                id="default-sidebar"
                className="hidden md:block fixed top-0 left-0 z-40 w-64 h-screen overflow-y-auto bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700"
                aria-label="Sidebar"
            >
                {/* サイドバーコンテンツ */}
                <div className="px-3 py-4">
                    <ChatInterface />
                </div>
            </aside>

            {/* モバイル用フローティングボタン */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden fixed bottom-4 right-6 w-14 h-14 rounded-full text-white bg-blue-600 flex items-center justify-center shadow-lg z-50 hover:bg-blue-700 transition duration-300"
                aria-label="Open chat"
            >
                <MessageCircle size={24} />
            </button>

            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-60" onClick={() => setIsOpen(false)}>
                    <div className="bg-white dark:bg-black w-full h-3/4 max-w-md rounded-t-xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="h-full relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-800 dark:text-gray-400 z-10"
                                title="チャットを閉じる"
                            >
                                <X size={20} />
                            </button>
                            <ChatInterface />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}