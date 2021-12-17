CREATE TABLE tasks
(
    id integer NOT NULL,
    referenceProjectId integer NOT NULL,
    label text  NOT NULL,
    bearbeiter text  NOT NULL,
    description text NOT NULL,
    estimatedTime DATE NOT NULL,
    CONSTRAINT todos_pkey PRIMARY KEY (id)
)
