export default function handler(req, res) {
    //res.status(200).json({ text: 'Hello' })
    res.send('<form action="//www-creators.com/rsc/receiver.php" method="post"><input type="text" name="first-name" value=""></form>')
  }