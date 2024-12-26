// 'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';
// import { Button } from '@/components/ui/button';
// import { Form } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';

// const portfolioSchema = z.object({
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   title: z.string().min(2, 'Title must be at least 2 characters'),
//   about: z.string().min(10, 'About must be at least 10 characters'),
//   education: z.array(z.object({
//     school: z.string(),
//     degree: z.string(),
//     year: z.string(),
//   })),
//   experience: z.array(z.object({
//     company: z.string(),
//     position: z.string(),
//     duration: z.string(),
//     description: z.string(),
//   })),
//   projects: z.array(z.object({
//     title: z.string(),
//     description: z.string(),
//     link: z.string().url().optional(),
//   })),
//   skills: z.array(z.string()),
//   contact: z.object({
//     email: z.string().email(),
//     phone: z.string().optional(),
//     location: z.string(),
//   }),
//   social: z.object({
//     linkedin: z.string().url().optional(),
//     github: z.string().url().optional(),
//     twitter: z.string().url().optional(),
//   }),
// });

// export function PortfolioForm({ data, onUpdate }) {
//   const { toast } = useToast();
//   const form = useForm({
//     resolver: zodResolver(portfolioSchema),
//     defaultValues: data,
//   });

//   async function onSubmit(values) {
//     try {
//       const response = await fetch('/api/portfolio', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(values),
//       });

//       if (!response.ok) throw new Error('Failed to save portfolio');

//       onUpdate(values);
//       toast({
//         title: 'Success',
//         description: 'Your portfolio has been saved!',
//       });
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to save portfolio. Please try again.',
//         variant: 'destructive',
//       });
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <div className="space-y-4">
//           <Input
//             label="Name"
//             {...form.register('name')}
//             error={form.formState.errors.name?.message}
//           />
//           <Input
//             label="Professional Title"
//             {...form.register('title')}
//             error={form.formState.errors.title?.message}
//           />
//           <Textarea
//             label="About"
//             {...form.register('about')}
//             error={form.formState.errors.about?.message}
//           />
//           {/* Add more form fields for education, experience, projects, etc. */}
//         </div>
//         <Button type="submit">Save Portfolio</Button>
//       </form>
//     </Form>
//   );
// }