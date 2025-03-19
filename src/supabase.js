
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rtwpiqikdczhnawrieci.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0d3BpcWlrZGN6aG5hd3JpZWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzOTc3ODQsImV4cCI6MjA1Nzk3Mzc4NH0.YRrSG1T_JbHqvEwBXNn34922GjzeNwk925MDyFRfD_4'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
