import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qigzdorfnydgfotdzyte.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZ3pkb3JmbnlkZ2ZvdGR6eXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyOTk2MTEsImV4cCI6MjEwMDg3NTYxMX0.yH6t303_O75M0v-KsxSciFtshl3AUcyqtKqLzV3TbCY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
