CREATE TABLE public.enquiry_replies (
  id uuid primary key default gen_random_uuid(),
  source_table text not null,
  source_id uuid,
  to_email text not null,
  subject text not null,
  body text not null,
  sent_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);
GRANT SELECT, INSERT ON public.enquiry_replies TO authenticated;
GRANT ALL ON public.enquiry_replies TO service_role;
ALTER TABLE public.enquiry_replies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view replies" ON public.enquiry_replies FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can create replies" ON public.enquiry_replies FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE INDEX enquiry_replies_source_idx ON public.enquiry_replies (source_table, source_id);