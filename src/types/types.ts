// Derma AI - TypeScript Types
// ==========================

export interface Pig {
  id: string;
  tagId: string;
  nickname: string;
  ageGroup: 'Piglet' | 'Weaner' | 'Grower' | 'Finisher' | 'Sow' | 'Boar';
  pen: string;
  notes: string;
  currentStatus: 'healthy' | 'suspected' | 'observation' | 'cleared';
  lastScanAt: string;
  createdAt: string;
}

export interface Scan {
  id: string;
  pigId: string | null;
  imageUrl: string;
  imagePath: string;
  topLabel: string;
  topConfidence: number;
  detections: Detection[];
  ageGroup: string;
  signs: string[];
  location: Location;
  status: 'new' | 'handled' | 'observation' | 'cleared';
  createdAt: string;
}

export interface Detection {
  label: string;
  confidence: number;
  box: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
}

export interface Location {
  text: string;
  lat: number | null;
  lng: number | null;
}

export interface User {
  uid: string;
  name: string;
  email: string;
  farmName: string;
  role: 'Farmer' | 'Technician' | 'Veterinarian';
  language: 'en' | 'bi';
  createdAt: string;
}

export interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, farmName: string, role: User['role']) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
}

export interface PredictionResult {
  status: 'ok' | 'no_detections';
  image_width: number;
  image_height: number;
  top_label: string;
  top_confidence: number;
  detections: Detection[];
  inference_ms: number;
}

export interface Alert {
  id: string;
  pigId: string;
  pigTag: string;
  disease: string;
  createdAt: string;
  handled: boolean;
}
