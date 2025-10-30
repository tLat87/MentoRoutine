import { AppState } from './models';
import { defaultTrophies } from './data';

// Lightweight AsyncStorage replacement using RN community package if present, else simple in-memory fallback
let AsyncStorage: any;
try {
  // Lazy require to avoid build issues if not installed; we provide an in-memory fallback
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AsyncStorage = require('@react-native-async-storage/async-storage').default;
} catch {
  const mem = new Map<string, string>();
  AsyncStorage = {
    async getItem(key: string) {
      return mem.get(key) ?? null;
    },
    async setItem(key: string, value: string) {
      mem.set(key, value);
    },
    async removeItem(key: string) {
      mem.delete(key);
    },
  };
}

const STATE_KEY = 'mento_state_v1';

export const loadState = async (): Promise<AppState> => {
  const raw = await AsyncStorage.getItem(STATE_KEY);
  if (raw) return JSON.parse(raw);
  return {
    userName: '',
    musicEnabled: true,
    vibrationEnabled: true,
    volume: 0.7,
    trophies: defaultTrophies(),
    scrolls: [],
  };
};

export const saveState = async (state: AppState) => {
  await AsyncStorage.setItem(STATE_KEY, JSON.stringify(state));
};

export const resetState = async () => {
  await AsyncStorage.removeItem(STATE_KEY);
};



