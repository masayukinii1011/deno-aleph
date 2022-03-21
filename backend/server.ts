import { serve } from "https://deno.land/std@0.130.0/http/server.ts";

serve(() => new Response("Hello World\n"));

console.log("http://localhost:8000/");