import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconBluesky from "@/assets/icons/IconBluesky.svg";
import IconMastodon from "@/assets/icons/IconMastodon.svg";

interface ShareLink {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
  filled?: boolean;
}

export const SHARE_LINKS: ShareLink[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/intent/compose?text=",
    linkTitle: `Share this post on Bluesky`,
    icon: IconBluesky,
    filled: true,
  },
  {
    name: "Mastodon",
    href: "https://mastodonshare.com/?url=",
    linkTitle: `Share this post on Mastodon`,
    icon: IconMastodon,
    filled: true,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
