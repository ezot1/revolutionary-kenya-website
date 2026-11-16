DROP POLICY IF EXISTS "Anyone can apply for membership" ON public.memberships;
CREATE POLICY "Anyone can apply for membership" ON public.memberships FOR INSERT TO anon, authenticated
WITH CHECK (length(trim(full_name)) BETWEEN 1 AND 200 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(email) <= 255
 AND (phone IS NULL OR length(phone) <= 50) AND (city IS NULL OR length(city) <= 200)
 AND (occupation IS NULL OR length(occupation) <= 200) AND (motivation IS NULL OR length(motivation) <= 5000));

DROP POLICY IF EXISTS "Anyone can insert contacts" ON public.contacts;
CREATE POLICY "Anyone can insert contacts" ON public.contacts FOR INSERT TO anon, authenticated
WITH CHECK (length(trim(name)) BETWEEN 1 AND 200 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(email) <= 255
 AND length(trim(message)) BETWEEN 1 AND 5000);

DROP POLICY IF EXISTS "Anyone can RSVP" ON public.event_rsvps;
CREATE POLICY "Anyone can RSVP" ON public.event_rsvps FOR INSERT TO anon, authenticated
WITH CHECK (length(trim(full_name)) BETWEEN 1 AND 200 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(email) <= 255
 AND length(trim(event_title)) BETWEEN 1 AND 300);

DROP POLICY IF EXISTS "Anyone can subscribe" ON public.subscribers;
CREATE POLICY "Anyone can subscribe" ON public.subscribers FOR INSERT TO anon, authenticated
WITH CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(email) <= 255);