import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabase;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    '⚠️ Warning: Supabase environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are missing. Running in development/offline mode.'
  );

  // Mock Supabase client for development until credentials are provided
  supabase = {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: (callback) => {
        // Simple mock trigger
        const mockUser = {
          id: '00000000-0000-0000-0000-000000000000',
          email: 'development@manivtha.com',
          user_metadata: { name: 'Manoj Sankar' }
        };
        // Trigger authenticated state for local development if desired, 
        // or keep it unauthenticated. Let's trigger it after a short delay 
        // to let the app start up, or let the user click "Login" with any email.
        return { data: { subscription: { unsubscribe: () => {} } } };
      },
      signInWithPassword: async ({ email, password }) => {
        if (email && password) {
          return {
            data: {
              user: {
                id: '00000000-0000-0000-0000-000000000000',
                email: email,
                user_metadata: { name: email.split('@')[0] }
              },
              session: { access_token: 'mock-jwt-token' }
            },
            error: null
          };
        }
        return { data: { user: null, session: null }, error: new Error('Invalid email or password') };
      },
      signUp: async ({ email, password, options }) => {
        return {
          data: {
            user: {
              id: '00000000-0000-0000-0000-000000000000',
              email: email,
              user_metadata: options?.data || {}
            },
            session: { access_token: 'mock-jwt-token' }
          },
          error: null
        };
      },
      signOut: async () => ({ error: null }),
      getUser: async () => ({
        data: {
          user: {
            id: '00000000-0000-0000-0000-000000000000',
            email: 'development@manivtha.com',
            user_metadata: { name: 'Manoj Sankar' }
          }
        },
        error: null
      })
    }
  };
}

export { supabase };
export default supabase;
