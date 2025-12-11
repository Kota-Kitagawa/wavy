import { ChatInterface } from '../ui/ChatInterface';

export function Sidebar() {
    return (
        <aside className="hidden md:flex md:flex-col w-64 bg-slate-900 text-white p-6">
            <ChatInterface />
        </aside>
    );
}