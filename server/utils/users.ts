import { User } from "../types";
export const users = [] as User[];

// Join user to chat
export function userJoin(user: User) {
    users.push(user);
    return user;
}

// Get current usere
export function getCurrentUser(id: string) {
    return users.find(user => user.id === id);
}

// User leaves chat
export function userLeave(id: string) {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room users
export function getRoomUsers(room: string) {
    return users.filter(user => user.room === room);
}