CREATE TABLE `account` (
	`userId` text NOT NULL,
	`type` text NOT NULL,
	`provider` text NOT NULL,
	`providerAccountId` text NOT NULL,
	`refresh_token` text,
	`access_token` text,
	`expires_at` integer,
	`token_type` text,
	`scope` text,
	`id_token` text,
	`session_state` text,
	PRIMARY KEY(`provider`, `providerAccountId`),
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `consent` (
	`id` text PRIMARY KEY NOT NULL,
	`reservationId` text,
	`themeId` text,
	`signatureData` text,
	`consentedAt` integer,
	FOREIGN KEY (`reservationId`) REFERENCES `reservation`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`themeId`) REFERENCES `theme`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `playerSetting` (
	`id` text PRIMARY KEY NOT NULL,
	`requireSignature` integer DEFAULT true NOT NULL,
	`requiredFields` text,
	`requireAllPlayers` integer DEFAULT false NOT NULL,
	`showBriefing` integer DEFAULT false NOT NULL,
	`briefingMediaUrl` text,
	`briefingHtml` text
);
--> statement-breakpoint
CREATE TABLE `player` (
	`id` text PRIMARY KEY NOT NULL,
	`consentId` text NOT NULL,
	`name` text NOT NULL,
	`phone` text,
	`email` text,
	FOREIGN KEY (`consentId`) REFERENCES `consent`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `reservation` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`themeId` text NOT NULL,
	`date` text NOT NULL,
	`time` text NOT NULL,
	`status` text DEFAULT 'PENDING' NOT NULL,
	`createdAt` integer,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`themeId`) REFERENCES `theme`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `review` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`themeId` text NOT NULL,
	`rating` integer NOT NULL,
	`content` text,
	`createdAt` integer,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`themeId`) REFERENCES `theme`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `session` (
	`sessionToken` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`expires` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `siteSetting` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`description` text,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE TABLE `theme` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`price` integer,
	`duration` integer,
	`createdAt` integer
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`email` text,
	`emailVerified` integer,
	`image` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE TABLE `verificationToken` (
	`identifier` text NOT NULL,
	`token` text NOT NULL,
	`expires` integer NOT NULL,
	PRIMARY KEY(`identifier`, `token`)
);
