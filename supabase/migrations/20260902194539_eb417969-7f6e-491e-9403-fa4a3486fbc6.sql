CREATE TABLE public.newsletter_issues (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  issue_number INTEGER,
  summary TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.newsletter_issues TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.newsletter_issues TO authenticated;
GRANT ALL ON public.newsletter_issues TO service_role;

ALTER TABLE public.newsletter_issues ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published issues are viewable by everyone"
ON public.newsletter_issues FOR SELECT
USING (published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert issues"
ON public.newsletter_issues FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update issues"
ON public.newsletter_issues FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete issues"
ON public.newsletter_issues FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));