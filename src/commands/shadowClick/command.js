import shadowTrigger from '../shadowTrigger';

export default function shadowClick(subject, options) {
  return shadowTrigger(subject, 'click', options);
}
