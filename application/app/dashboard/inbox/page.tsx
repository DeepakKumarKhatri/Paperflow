"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FcSearch } from "react-icons/fc";
import { motion } from "framer-motion";
import { initialUsers } from "@/lib/chatting_users";

export default function Page() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUserId, setSelectedUserId] = useState(users[0].id);
  const [newMessage, setNewMessage] = useState("");

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      const updatedUsers = users.map((user) => {
        if (user.id === selectedUserId) {
          const updatedHistory = [
            ...user.chatHistory,
            { id: user.chatHistory.length + 1, text: newMessage, sender: "me" },
          ];
          return { ...user, chatHistory: updatedHistory };
        }
        return user;
      });

      setUsers(updatedUsers);
      setNewMessage("");

      setTimeout(() => {
        const updatedUsersWithResponse = updatedUsers.map((user) => {
          if (user.id === selectedUserId) {
            const updatedHistory = [
              ...user.chatHistory,
              {
                id: user.chatHistory.length + 2,
                text: "That's great to hear!",
                sender: "other",
              },
            ];
            return { ...user, chatHistory: updatedHistory };
          }
          return user;
        });

        setUsers(updatedUsersWithResponse);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen bg-white dark:bg-zinc-800">
      <aside className="w-80 border-r dark:border-zinc-700">
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Messages</h2>
          </div>
          <div className="relative">
            <FcSearch className="absolute left-2.5 top-3 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            <Input
              className="pl-8"
              placeholder="Search messages..."
              type="search"
            />
          </div>
          <div className="space-y-2">
            {users.map((user) => (
              <Card
                key={user.id}
                className={`${user.bgColor}`}
                onClick={() => setSelectedUserId(user.id)}
              >
                <CardContent className="flex items-center mt-3 gap-3">
                  <Avatar className="relative w-10 h-10">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </aside>
      <section className="flex flex-col w-full">
        {selectedUser ? (
          <>
            <header className="border-b dark:border-zinc-700 p-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Avatar className="relative overflow-visible w-10 h-10">
                  <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
                  <AvatarImage src={selectedUser.avatar} />
                  <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  {selectedUser.name}
                  <span className="text-xs text-green-600 block">Online</span>
                </div>
              </h2>
            </header>
            <main className="flex-1 overflow-auto p-4 space-y-4">
              {selectedUser.chatHistory.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end gap-2 ${
                    message.sender === "me" ? "justify-end" : ""
                  }`}
                >
                  <div
                    className={`rounded-lg p-2 ${
                      message.sender === "me"
                        ? "bg-blue-500 text-white"
                        : "bg-zinc-200 dark:bg-zinc-700"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </main>
            <footer className="border-t dark:border-zinc-700 p-4">
              <div className="flex items-center gap-2">
                <Input
                  className="flex-1"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>Send</Button>
              </div>
            </footer>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-zinc-500 dark:text-zinc-400">
            Select a user to start chatting
          </div>
        )}
      </section>
    </div>
  );
}
