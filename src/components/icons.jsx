import {
  UserSearch,
  GraduationCap,
  ClipboardList,
  BookOpenCheck,
  CalendarCheck,
  Handshake,
  Building2,
  Presentation,
  Link2,
  Search,
  TrendingUp,
  UsersRound,
  BookOpen,
  Users,
  Layers,
  Target,
} from "lucide-react";

const map = {
  UserSearch,
  GraduationCap,
  ClipboardList,
  BookOpenCheck,
  CalendarCheck,
  Handshake,
  Building2,
  Presentation,
  Link2,
  Search,
  LineChart: TrendingUp,
  UsersRound,
  BookOpen,
  Users,
  Layers,
  Target,
};

export function Icon({ name, ...props }) {
  const Cmp = map[name] || Target;
  return <Cmp aria-hidden="true" {...props} />;
}

// Lucide has deprecated brand icons, so LinkedIn is drawn inline.
export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.1V21h-4v-4.85c0-1.16-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56V21h-4V9.75Z" />
    </svg>
  );
}
