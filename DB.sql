CREATE TABLE IF NOT EXISTS tareas (
    id serial NOT NULL,
    producto character varying NOT NULL,
    tipo character varying NOT NULL,
    titulo text,
    fecha Date NOT NULL,
    estado text,
    activo boolean
);

DO $$
BEGIN 
    IF NOT EXISTS(SELECT 1 FROM pg_constraint WHERE conname='pk_tareas') THEN
        ALTER TABLE tareas ADD CONSTRAINT pk_tareas
            PRIMARY KEY (id);
    END IF;
END;
$$;

INSERT INTO public.tareas(
    producto, tipo, titulo, fecha, estado, activo)
    VALUES ('zapatilla topper clasica', 'descuento de precio', 'promocion navidad', '2021-12-16', 'TO-DO', true);

INSERT INTO public.tareas(
    producto, tipo, titulo, fecha, estado, activo)
    VALUES ('zapatilla adidas ultimate', 'descuento de precio', 'promocion navidad', '2021-12-17', 'TO-DO', true);

INSERT INTO public.tareas(
    producto, tipo, titulo, fecha, estado, activo)
    VALUES ('zapatilla nike urban', 'baja de producto', 'promocion navidad', '2021-12-18', 'DELETE', false);
    
INSERT INTO public.tareas(
    producto, tipo, titulo, fecha, estado, activo)
    VALUES ('zapatilla puma clasica', 'descuento de precio', 'promocion navidad', '2021-12-19', 'TO-DO', true);