
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rjaxypoggkduwxkqihlf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqYXh5cG9nZ2tkdXd4a3FpaGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1NzA5OTUsImV4cCI6MjAzMTE0Njk5NX0.WkoR9rYGN-uKxOXF1C5hm6rLMp5WkXtoiMCfy6BRPak'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;