<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController
{
    #[Route('/index1', name: 'index1')]
    public function index1(): Response
    {
        return $this->render('base1.html.twig');
    }


    #[Route('/index2', name: 'index2')]
    public function index2(): Response
    {
        return $this->render('base2.html.twig');
    }

    #[Route('/index3', name: 'index3')]
    public function index3(): Response
    {
        return $this->render('base3.html.twig');
    }
}
