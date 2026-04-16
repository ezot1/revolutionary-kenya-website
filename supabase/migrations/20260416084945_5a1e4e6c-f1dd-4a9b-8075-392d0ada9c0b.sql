
DROP POLICY "Anyone can read published posts" ON public.posts;

CREATE POLICY "Anyone can read all posts" ON public.posts FOR SELECT TO public USING (true);
