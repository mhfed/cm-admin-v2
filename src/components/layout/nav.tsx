import { Link } from 'react-router-dom'
import { IconChevronDown } from '@tabler/icons-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { cn } from '@utils/cn'
import useCheckActiveNav from '@hooks/common/use-check-active-nav'
import { SideLink } from '@data/sidelinks'
import { Button, buttonVariants } from '@components/custom/button'

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean
  links: SideLink[]
  closeNav: () => void
}

export default function Nav({
  links,
  isCollapsed,
  className,
  closeNav,
}: NavProps) {
  const renderLink = ({ sub, ...rest }: SideLink) => {
    const key = `${rest.title}-${rest.href}`
    if (isCollapsed && sub)
      return (
        <NavLinkIconDropdown
          {...rest}
          sub={sub}
          key={key}
          closeNav={closeNav}
        />
      )

    if (isCollapsed)
      return <NavLinkIcon {...rest} key={key} closeNav={closeNav} />

    if (sub)
      return (
        <NavLinkDropdown {...rest} sub={sub} key={key} closeNav={closeNav} />
      )

    return <NavLink {...rest} key={key} closeNav={closeNav} />
  }
  return (
    <div
      data-collapsed={isCollapsed}
      className={cn(
        'group border-b bg-background py-2 transition-[max-height,padding] duration-500 data-[collapsed=true]:py-2 md:border-none',
        className
      )}
    >
      <TooltipProvider delayDuration={0}>
        <nav className='grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
          {links.map(renderLink)}
        </nav>
      </TooltipProvider>
    </div>
  )
}

interface NavLinkProps extends SideLink {
  subLink?: boolean
  closeNav: () => void
}

function NavLink({
  title,
  icon,
  label,
  href,
  closeNav,
  subLink = false,
}: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav()
  return (
    <Link
      to={href}
      onClick={closeNav}
      className={cn(
        buttonVariants({
          variant: checkActiveNav(href) ? 'default' : 'ghost',
          size: 'sm',
        }),
        'h-12 justify-start text-wrap rounded-none px-6',
        subLink && 'h-10 w-full pl-8'
      )}
      aria-current={checkActiveNav(href) ? 'page' : undefined}
    >
      <div className='mr-2'>{icon}</div>
      {title}
      {label && (
        <div className='ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground'>
          {label}
        </div>
      )}
    </Link>
  )
}

function NavLinkDropdown({ title, icon, label, sub, closeNav }: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav()

  const isChildActive = !!sub?.find((s) => checkActiveNav(s.href) || s.sub?.some(ss => checkActiveNav(ss.href)))

  return (
    <Collapsible defaultOpen={isChildActive}>
      <CollapsibleTrigger
        className={cn(
          buttonVariants({ 
            variant: isChildActive ? 'secondary' : 'ghost', 
            size: 'sm', 
          }),
          `group h-12 w-full justify-start rounded-none px-6 ${isChildActive ? 'bg-primary/20' : ''}`
        )}
      >
        <div className='mr-2'>{icon}</div>
        {title}
        {label && (
          <div className='ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground'>
            {label}
          </div>
        )}
        <span
          className={cn(
            'ml-auto transition-all group-data-[state="open"]:-rotate-180'
          )}
        >
          <IconChevronDown stroke={1} />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className='collapsibleDropdown' asChild>
        <ul>
          {sub!.map((sublink) => (
            <li key={sublink.title} className='my-1'>
              {sublink.sub ? (
                <NavLinkDropdown {...sublink} subLink closeNav={closeNav} />
              ) : (
                <NavLink {...sublink} subLink closeNav={closeNav} />
              )}
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

function NavLinkIcon({ title, icon, label, href }: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav()
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          to={href}
          className={cn(
            buttonVariants({
              variant: checkActiveNav(href) ? 'secondary' : 'ghost',
              size: 'icon',
            }),
            'h-12 w-12'
          )}
        >
          {icon}
          <span className='sr-only'>{title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side='right' className='flex items-center gap-4'>
        {title}
        {label && (
          <span className='ml-auto text-muted-foreground'>{label}</span>
        )}
      </TooltipContent>
    </Tooltip>
  )
}

function NavLinkIconDropdown({ title, icon, label, sub }: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav()

  const isChildActive = !!sub?.find((s) => checkActiveNav(s.href) || s.sub?.some(ss => checkActiveNav(ss.href)))

  return (
    <DropdownMenu>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant={isChildActive ? 'secondary' : 'ghost'}
              size='icon'
              className='w-12 h-12'
            >
              {icon}
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side='right' className='flex items-center gap-4'>
          {title}{' '}
          {label && (
            <span className='ml-auto text-muted-foreground'>{label}</span>
          )}
          <IconChevronDown
            size={18}
            className='-rotate-90 text-muted-foreground'
          />
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent side='right' align='start' sideOffset={4}>
        <DropdownMenuLabel>
          {title} {label ? `(${label})` : ''}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {sub!.map(({ title, icon, label, href, sub: subSub }) => {
          const isSubActive = checkActiveNav(href) || subSub?.some(ss => checkActiveNav(ss.href))
          return (
            subSub ? (
              <DropdownMenu key={`${title}-${href}`}>
                <DropdownMenuTrigger className={cn(
                  'w-full px-2 py-1.5 hover:bg-accent flex items-center',
                  isSubActive && 'bg-secondary'
                )}>
                  {icon} <span className='ml-2 max-w-52 text-wrap'>{title}</span>
                  {label && <span className='ml-auto text-xs'>{label}</span>}
                  <IconChevronDown size={18} className='ml-auto -rotate-90' />
                </DropdownMenuTrigger>
                <DropdownMenuContent side='right' align='start' sideOffset={-5}>
                  {subSub.map(({ title, icon, label, href }) => {
                    const isActive = checkActiveNav(href)
                    return (
                      <DropdownMenuItem key={`${title}-${href}`} asChild>
                        <Link
                          to={href}
                          className={cn(
                            'flex items-center',
                            isActive && 'bg-secondary'
                          )}
                        >
                          {icon} <span className='ml-2 max-w-52 text-wrap'>{title}</span>
                          {label && <span className='ml-auto text-xs'>{label}</span>}
                        </Link>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenuItem key={`${title}-${href}`} asChild>
                <Link
                  to={href}
                  className={cn(
                    'flex items-center',
                    checkActiveNav(href) && 'bg-secondary'
                  )}
                >
                  {icon} <span className='ml-2 max-w-52 text-wrap'>{title}</span>
                  {label && <span className='ml-auto text-xs'>{label}</span>}
                </Link>
              </DropdownMenuItem>
            )
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
