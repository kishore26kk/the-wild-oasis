import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gtmbdxbfwtcqxfjdpeou.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0bWJkeGJmd3RjcXhmamRwZW91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5MDA3OTQsImV4cCI6MjAwODQ3Njc5NH0.simSKxP3gxVzpL7hk8tk5RrLRE-4oyMd8nr2bQwNlg8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;