import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhbWZncWt1eWxqdWdrb2tjaXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1NzMwNTYsImV4cCI6MjAzNzE0OTA1Nn0.S8YseZqfPAuSq8Fq5CytsxKt6y6kOoWPoiroacMD9X8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
