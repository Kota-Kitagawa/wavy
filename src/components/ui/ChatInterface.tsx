import React from "react";

export function ChatInterface() {
    return (
        <div className="flex flex-col h-full">
            <div className="px-4 mt-4">
                <div className="p-3 text-center">
                    <div className="inline-block relative">
                        <span className="font-bold">チャット</span>
                        {/* 下線は文字幅より少し大きくする。light:黒 / dark:白 で見えるようにする */}
                        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-[calc(100%+12px)] h-1 bg-black dark:bg-white rounded" />
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto text-sm bg-gray-50 dark:bg-gray-900">
                <div className="text-center text-gray-500 dark:text-gray-400">
                    ようこそ！何かご質問はありますか？
                </div>
            </div>

            <div className="mt-3 p-3 bg-white dark:bg-gray-800">
                <input
                    type="text"
                    placeholder="メッセージを入力..."
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
}