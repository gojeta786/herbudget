'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { route: '/', label: 'Dashboard', icon: '📊' },
  { route: '/transactions', label: 'Transactions', icon: '💳' },
  { route: '/add', label: 'Add', icon: '➕', isCenter: true },
  { route: '/insights', label: 'Insights', icon: '💡' },
  { route: '/profile', label: 'Profile', icon: '👤' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.route}
          href={item.route}
          className={`bottom-nav-item ${item.isCenter ? 'flex flex-col items-center justify-center' : ''} ${pathname === item.route ? 'active' : ''}`}
          style={item.isCenter ? { position: 'relative', top: -20 } : undefined}
        >
          {item.isCenter ? (
            <span
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 24,
                boxShadow: '0 4px 16px rgba(183, 110, 121, 0.4)',
              }}
            >
              {item.icon}
            </span>
          ) : (
            <>
              <span style={{ fontSize: 24 }}>{item.icon}</span>
              <span>{item.label}</span>
            </>
          )}
        </Link>
      ))}
    </nav>
  );
}
