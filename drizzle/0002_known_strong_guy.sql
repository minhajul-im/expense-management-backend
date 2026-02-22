CREATE TYPE "public"."limit_type" AS ENUM('normal', 'soft', 'hard');--> statement-breakpoint
CREATE TABLE "budgets" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" numeric NOT NULL,
	"year" integer NOT NULL,
	"limit_type" "limit_type" DEFAULT 'normal',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"organization_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	CONSTRAINT "budgets_category_id_unique" UNIQUE("category_id")
);
--> statement-breakpoint
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;