
// Fix: Added React import to define React namespace for ReactNode type
import React from 'react';

export enum UserRole {
  ADMIN = 'Admin',
  MANAGER = 'Manager',
  EMPLOYEE = 'Employee'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}
