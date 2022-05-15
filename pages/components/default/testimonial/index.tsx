import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface Props {
    testimonial: String
}

export default function Testimonial({testimonial}: Props) {
  return (
    <div className="d-flex testimonial"><FormatQuoteIcon className="quote-left quote-testimonials"/> <p>{testimonial}</p> <FormatQuoteIcon className="quote-right quote-testimonials"/></div>
  )
}