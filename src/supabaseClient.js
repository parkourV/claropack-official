import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qigzdorfnydgfotdzyte.supabase.co'
const supabaseAnonKey = 'sb_publishable_w9VWUEZiJEZRkY39-jKUdA_x747hp7k'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
